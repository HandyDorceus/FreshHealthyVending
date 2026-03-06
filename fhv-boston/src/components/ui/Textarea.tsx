import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, rows = 4, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            'w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground',
            'placeholder:text-slate-400',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-50',
            'transition-colors resize-y',
            error && 'border-error focus:ring-error',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 text-sm text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;

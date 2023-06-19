import { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react';

function BaseInputGroup({
  id,
  label,
  type,
  inputMode,
  value,
  onChange,
  error,
  placeholder,
}: {
  id?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex-1 flex flex-col">
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
      <input
        type={type}
        inputMode={inputMode}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border-gray-200 border-2 rounded-md outline-none text-accent"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

function ExtendedInputGroup({
  id,
  label,
  type,
  inputMode,
  value,
  onChange,
  error,
  placeholder,
  prefix,
  suffix,
}: {
  id?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col">
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
      <div className="w-full border-2 border-gray-200 rounded-md flex justify-center items-center gap-2">
        {prefix && (
          <div className="border-r-2 border-gray-200 px-3 py-1.5 text-gray-500 text-lg">
            {prefix}
          </div>
        )}
        <input
          type={type}
          inputMode={inputMode}
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-accent px-2 focus:outline-0 w-full"
        />
        {suffix && (
          <div className="border-l-2 border-gray-200 px-3 py-1.5 text-gray-500 text-lg">
            {suffix}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default function InputGroup({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  prefix,
  suffix,
}: {
  id?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}) {
  const inputMode =
    type === 'number'
      ? 'numeric'
      : type === 'email'
      ? 'email'
      : type === 'tel'
      ? 'tel'
      : undefined;

  if (prefix || suffix) {
    return (
      <ExtendedInputGroup
        id={id}
        label={label}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        error={error}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
      />
    );
  }
  return (
    <BaseInputGroup
      id={id}
      label={label}
      type={type}
      inputMode={inputMode}
      value={value}
      onChange={onChange}
      error={error}
      placeholder={placeholder}
    />
  );
}

"use client";

type VariantSelectorProps = {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function VariantSelector({
  label,
  options,
  selected,
  onSelect,
}: Readonly<VariantSelectorProps>) {
  return (
    <div>
      <h3 className="text-sm font-medium dark:text-white text-gray-900 mb-2">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`px-3 hover:bg-gray-100 dark:text-white text-black dark:hover:text-black cursor-pointer py-1 border rounded-md text-sm ${
              selected === option
                ? "bg-gray-100 border-gray-800 dark:!text-black"
                : "border-gray-300  "
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

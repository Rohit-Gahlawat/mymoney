"use client"

export const TextInput = ({
    placeholder,
    onChange,
    label
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
}) => {
    return <div className="pt-2">
        <label className="mb-1.5 block text-sm font-medium text-stone-700">{label}</label>
        <input
            onChange={(e) => onChange(e.target.value)}
            type="text"
            className="block w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 transition-colors duration-200 placeholder:text-stone-400 hover:border-[#FF0052] focus:border-[#FF0052] focus:outline-none focus:ring-2 focus:ring-[#FF0052]/40"
            placeholder={placeholder}
        />
    </div>
}

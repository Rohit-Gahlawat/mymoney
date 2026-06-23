"use client"
export const Select = ({ options, onSelect }: {
    onSelect: (value: string) => void;
    options: {
        key: string;
        value: string;
    }[];
}) => {
    return <select onChange={(e) => {
        onSelect(e.target.value)
    }} className="block w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 transition-colors duration-200 hover:border-[#FF0052] focus:border-[#FF0052] focus:outline-none focus:ring-2 focus:ring-[#FF0052]/40">
        {options.map(option => <option key={option.key} value={option.key}>{option.value}</option>)}
    </select>
}

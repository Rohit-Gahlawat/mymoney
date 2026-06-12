export const Button = ({ label }: { label: string }) => {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            {label}
        </button>
    );
};
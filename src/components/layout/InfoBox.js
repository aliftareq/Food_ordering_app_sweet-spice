
const InfoBox = ({ children }) => {
    return (
        <div className="text-center bg-blue-200 rounded-md py-2 font-semibold text-blue-600">
            {children}
        </div>
    );
};

export default InfoBox;
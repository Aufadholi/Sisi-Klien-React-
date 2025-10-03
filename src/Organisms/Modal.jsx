export default function Modal({ isOpen, onClose, children}) {
    if(!isOpen) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
                {children}
                <button onClick={onClose} className="absolute top-2 right-2">Close</button>
            </div>
        </div>
    );
}
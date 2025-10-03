import Label from "../Atoms/Label";
import Input from "../Atoms/Input";

export default function Form({ fields, onSubmit, children}) {
    return(
        <form onSubmit={onSubmit} className="space-y-4">
            {fields.map((field, index)=>(
                <div key={index}>
                    <Label htmlFor={field.name}>{field.label}</Label>
                    <Input type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
                </div>
            ))}
            {children}
        </form>
    );
}
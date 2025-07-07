interface useSelectProps {
    options: { oValue: string, label: string}[],
}

export const useSelect = ({ options }: useSelectProps) => {
    const optionsItem = options.map(option => ( 
            <option value={option.oValue} key={option.oValue}>{option.label}</option>
    ));

    return { optionsItem };
}
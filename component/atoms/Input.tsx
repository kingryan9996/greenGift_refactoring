import styles from "styles/atoms/Input.module.scss";
interface InputType {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  property?: Record<string, string | number | boolean>;
}
export default function Input({
  value,
  onChange,
  placeholder,
  property,
}: InputType) {
  return (
    <input
      className={styles.Input}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        const inputValue = e.target.value;
        onChange(inputValue);
      }}
      {...property}
    />
  );
}

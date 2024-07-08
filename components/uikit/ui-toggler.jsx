/**
 *
 * @param {{
 * id: number,
 * disabled?: boolean,
 * className: string,
 * }} props
 * @returns
 */

export function UiToggler({
  id,
  disabled,
  className,
  isChecked,
  handleCheckboxChange,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="relative inline-flex cursor-pointer items-center"
      >
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
          id={id}
          className="peer sr-only"
          disabled={disabled}
        />
        <div
          className="
          h-6 w-11 rounded-full bg-gray-100 after:absolute after:top-0.5 peer-focus:shadow-none
        after:left-0.5 after:h-5 after:w-5 after:rounded-full border-none peer-checked:bg-black after:bg-white after:shadow after:transition-all after:content-[''] 
        hover:bg-gray-200 peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white 
        peer-focus:ring-4 peer-focus:ring-gray-600/20 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50
        "
        ></div>
      </label>
    </div>
  )
}

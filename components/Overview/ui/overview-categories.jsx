export function OverviewCategories({ categories }) {
  return (
    <ul className="flex gap-2">
      {categories.map((category) => (
        <li
          key={category.id}
          style={{
            backgroundColor: category.bgColor,
            color: category.textColor,
          }}
          className="rounded-[16px] py-[2px] px-[10px] transition-colors"
        >
          <a href="#" className="text-sm">
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

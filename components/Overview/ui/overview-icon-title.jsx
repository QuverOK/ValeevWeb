export function OverviewIconTitle({ icon }) {
  return (
    <section className="mt-[50px]">
      <div className="container">
        <h1 className=" whitespace-nowrap leading-[243px] font-bold py-14 border-y-[1.5px]  border-[rgb(var(--accent))]">
          {icon}
        </h1>
      </div>
    </section>
  )
}

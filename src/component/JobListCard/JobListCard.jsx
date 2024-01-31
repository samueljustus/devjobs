function JobListCard({children}) {
  return (
    <section className="bg-[#f5f8ff] w-screen h-full py-5 px-5">
    <div className="bg-[#ffffff] rounded-md z-10 shadow-lg p-5">
      {children}
    </div>
    </section>
  )
}

export default JobListCard

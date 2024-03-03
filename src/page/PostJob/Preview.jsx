import { useWatch } from 'react-hook-form'
function Preview({control}) {

    const jobTitle = useWatch({
        control,
        name: "jobtitle",
        defaultValue: ""
    })
  return (
    <section>
          <h2>Preview</h2>
          <p>
            Complete the form on the left to watch your listing come to life
          </p>
          <h1>{jobTitle}</h1>
        </section>
  )
}

export default Preview

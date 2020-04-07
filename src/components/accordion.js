import React, { useState, useRef, useEffect } from 'react'

const Accordion = ({ children, title }) => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div className="">
      <div className="" onClick={toggleActive}>
        <h2 className="">
          <div className="btn accordion-title border-bottom">
            <h5 className="">{title}</h5>
            <svg
              className={active ? 'accordion-icon rotate' : 'accordion-icon'}
              height={20}
              width={10}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                // fill="#="
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              />
            </svg>
          </div>
        </h2>
      </div>
      <div ref={contentRef} className="accordion-content">
        <p className="card-body">{children}</p>
      </div>
    </div>
  )
}

export default Accordion

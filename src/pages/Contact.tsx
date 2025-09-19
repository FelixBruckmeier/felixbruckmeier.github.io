import React from 'react'

const Contact: React.FC = () => (
  <div className="container-responsive py-12 space-y-6">
    <h1 className="text-3xl font-semibold">Contact</h1>
    <p className="text-muted-foreground">Happy to connect. Reach out via email or LinkedIn.</p>
    <div className="flex gap-3">
      <a className="btn" href="mailto:felix.bruckmeier@gmail.com">Email</a>
      <a className="btn btn-secondary" href="https://www.linkedin.com/in/felix-bruckmeier" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  </div>
)
export default Contact
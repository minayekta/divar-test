import React, { useState } from 'react'
import SendOtpFrom from '../components/templates/SendOtpFrom'
import CheckOtpForm from '../components/templates/CheckOtpForm'

function AuthPage() {
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState('')
  const [code, setCode] = useState('')
  return (
    <div>
      {step === 1 && <SendOtpFrom setStep={setStep} mobile={mobile} setMobile={setMobile} />}
      {step === 2 && <CheckOtpForm />}
    </div>
  )
}

export default AuthPage

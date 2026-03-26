import { PersonStanding } from 'lucide-react'
import React from 'react'

const Onboarding = () => {
  return (
    <>
    <Toaster /> 
     <div className="onboarding container">
      {/*Header*/}
      <div className="p-6 pt-12 onboarding-wrapper">
        <div>
          <div>
            <PersonStanding className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2x1 font-bold text-slate-800 dark:text-white">FitTrack</h1>
        </div>

      </div>

     </div>
      
    </>
  )
}

export default Onboarding

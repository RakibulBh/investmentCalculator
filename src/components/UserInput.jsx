import { useState } from "react"

export default function UserInput({ onChange, userInput }) {


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input value={userInput.initialInvestment} type="number" required onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input value={userInput.annualInvestment} type="number" required onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return </label>
                    <input value={userInput.expectedReturn} type="number" required onChange={(event) => onChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input value={userInput.duration} type="number" required onChange={(event) => onChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}
import React, { useState } from "react";

const EventRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    attendees: 0,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const validateStep1 = () => {
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email address is invalid.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const { eventType, date, attendees } = formData;
    if (!eventType || !date || attendees <= 0) {
      alert("Please fill in all fields correctly.");
      return false;
    }
    return true;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && validateStep1()) {
      nextStep();
    } else if (step === 2 && validateStep2()) {
      nextStep();
    }
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const confirmRegistration = () => {
    alert("Registration Confirmed!");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold">User Information</h2>
            <form onSubmit={handleNextStep}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  onChange={handleChange("name")}
                  value={formData.name}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  onChange={handleChange("email")}
                  value={formData.email}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  onChange={handleChange("phone")}
                  value={formData.phone}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Next
              </button>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold">Event Details</h2>
            <form onSubmit={handleNextStep}>
              <div>
                <label className="block text-gray-700">Event Type</label>
                <select
                  onChange={handleChange("eventType")}
                  value={formData.eventType}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                >
                  <option value="">Select Event Type</option>
                  <option value="Conference">Conference</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Meetup">Meetup</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  onChange={handleChange("date")}
                  value={formData.date}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Number of Attendees
                </label>
                <input
                  type="number"
                  onChange={handleChange("attendees")}
                  value={formData.attendees}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  min="1"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold">Confirmation</h2>
            <div>
              <h3 className="font-semibold">User Information</h3>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold">Event Details</h3>
              <p>Event Type: {formData.eventType}</p>
              <p>Date: {formData.date}</p>
              <p>Number of Attendees: {formData.attendees}</p>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Back
              </button>
              <button
                type="button"
                onClick={confirmRegistration}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return <div>{renderStep()}</div>;
};

export default EventRegistration;

import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [genderPreference, setGenderPreference] = useState("");

  const { signUp, loading } = useAuthStore();

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        signUp({ name, email, password, age, gender, genderPreference });
      }}
    >
      {/* name  */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
            placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
      </div>

      {/* email  */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
            placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
      </div>
      {/* password  */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
            placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
      </div>
      {/* email  */}
      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <div className="mt-1">
          <input
            id="age"
            name="age"
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min={18}
            max={129}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
            placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
      </div>
      {/* gender  */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Your Gender
        </label>
        <div className="mt-2 flex gap-2">
          <div className="flex items-center">
            <input
              name="gender"
              id="male"
              type="checkbox"
              checked={gender === "male"}
              onChange={() => setGender("male")}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label htmlFor="male" className="ml-2 block text-sm text-gray-900">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              name="gender"
              id="female"
              type="checkbox"
              checked={gender === "female"}
              onChange={() => setGender("female")}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label
              htmlFor="female"
              className="ml-2 block text-sm text-gray-900"
            >
              Female
            </label>
          </div>
        </div>
      </div>
      {/* prefer  */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Prefer Me
        </label>
        <div className="mt-2 flex gap-2 flex-col">
          <div className="flex items-center">
            <input
              name="genderPreference"
              id="prefer-male"
              value="male"
              type="radio"
              checked={genderPreference === "male"}
              onChange={(e) => setGenderPreference(e.target.value)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label
              htmlFor="prefer-male"
              className="ml-2 block text-sm text-gray-900"
            >
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              name="genderPreference"
              id="prefer-female"
              value="female"
              type="radio"
              checked={genderPreference === "female"}
              onChange={(e) => setGenderPreference(e.target.value)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label
              htmlFor="prefer-female"
              className="ml-2 block text-sm text-gray-900"
            >
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input
              name="genderPreference"
              id="prefer-both"
              type="radio"
              value="both"
              checked={genderPreference === "both"}
              onChange={(e) => setGenderPreference(e.target.value)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label
              htmlFor="prefer-both"
              className="ml-2 block text-sm text-gray-900"
            >
              Both
            </label>
          </div>
        </div>
      </div>
      <button
        disabled={loading}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
      font-medium text-white ${
        loading
          ? "bg-pink-400 cursor-not-allowed"
          : "bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      }`}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;

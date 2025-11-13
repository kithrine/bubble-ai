import React from "react"
import GPTIcon from "../../icons/GPTIcon"

const OptionWithIcon = ({ value, label, icon }) => {
  return (
    <option value={value} className="flex items-center">
      <>
        {/* You can replace the below div with an image or svg */}
        <div className="mr-2">
          {icon}
        </div>
        {label}
      </>
    </option>
  );
};

const ModelSelectBox = ({ chatForm, setChatForm, }) => {

  const options = [
    { value: "deepseek-r1", label: "DeepSeek R1", icon: <img src={new URL("./icons/DeepseekPng.png", import.meta.url).href} className="size-6" alt="..." /> },
    { value: "deepseek-coder-v2", label: "deepseek-coder-v2", icon: <img src={new URL("./icons/DeepseekPng.png", import.meta.url).href} className="size-6" alt="..." /> },
    { value: "gemma2", label: "Gemma 2", icon: <img src={new URL("./icons/DeepseekPng.png", import.meta.url).href} className="size-6" alt="..." /> },
    { value: "gpt-oss", label: "GPT-OSS", icon: <GPTIcon /> },
    { value: "mistral", label: "Mistral", icon: <img src={new URL("./icons/Mistral.png", import.meta.url).href} className="size-6" alt="..." /> },
    // Add more options as needed
  ];


  return (
    <>
      <select 
        value={chatForm.model}
        onChange={(e) =>
          setChatForm({ ...chatForm, model: e.target.value })
        }
        defaultValue="Select Model" 
        className="select select-secondary min-w-50"
      >
        {options.map((option, index) => {
          <OptionWithIcon key={index} value={option.value} label={option.label} icon={option.icon} />
        })}
      </select>
    </>
  )
}

export default ModelSelectBox
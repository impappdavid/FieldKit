"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, GripVertical } from "lucide-react"
import { use, useState } from "react"
import { Button } from "../ui/button"

function Auth() {
    const [email, setEmail] = useState(true)
    const [password, setPassword] = useState(true)
    const [username, setUsername] = useState(true)
    const [firstname, setFirstname] = useState(true)
    const [lastname, setLastname] = useState(true)
    const [phonenumber, setPhonenumber] = useState(true)
    const [socials, setSocials] = useState(true)

    const [google, setGoogle] = useState(true)
    const [x, setX] = useState(true)
    const [discord, setDiscord] = useState(true)
    const [github, setGithub] = useState(true)
    const [apple, setApple] = useState(true)
    const [facebook, setFacebook] = useState(true)
    return (
        <>
            <div className="flex flex-col gap-4 px-2">
                <div className="text-zinc-400 text-sm ">Connect Options</div>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setEmail(!email)}
                        className="flex items-center justify-between w-full max-w-xs p-3 bg-zinc-800/40 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition-all duration-300"
                        aria-checked={email}
                        role="checkbox"
                    >
                        <div className="flex items-center gap-2">
                            <div className="grid place-items-center w-6 h-6 opacity-70 cursor-grab">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <span className="text-white text-base ">Email</span>
                        </div>
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${email ? "bg-[#1a8cff]" : "bg-zinc-800"
                                }`}
                        >
                            {email && <Check className="w-4 h-4 text-white" />}
                        </div>
                    </button>

                    <button
                        onClick={() => setPassword(!password)}
                        className="flex items-center justify-between w-full max-w-xs p-3 bg-zinc-800/40 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition-all duration-300"
                        aria-checked={password}
                        role="checkbox"
                    >
                        <div className="flex items-center gap-2">
                            <div className="grid place-items-center w-6 h-6 opacity-70 cursor-grab">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <span className="text-white text-base">Password</span>
                        </div>
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${password ? "bg-[#1a8cff]" : "bg-zinc-800"
                                }`}
                        >
                            {password && <Check className="w-4 h-4 text-white" />}
                        </div>
                    </button>

                    <button
                        onClick={() => setUsername(!username)}
                        className="flex items-center justify-between w-full max-w-xs p-3 bg-zinc-800/40 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition-all duration-300"
                        aria-checked={username}
                        role="checkbox"
                    >
                        <div className="flex items-center gap-2">
                            <div className="grid place-items-center w-6 h-6 opacity-70 cursor-grab">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <span className="text-white text-base ">Username</span>
                        </div>
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${username ? "bg-[#1a8cff]" : "bg-zinc-800"
                                }`}
                        >
                            {username && <Check className="w-4 h-4 text-white" />}
                        </div>
                    </button>

                    <button
                        onClick={() => setFirstname(!firstname)}
                        className="flex items-center justify-between w-full max-w-xs p-3 bg-zinc-800/40 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition-all duration-300"
                        aria-checked={firstname}
                        role="checkbox"
                    >
                        <div className="flex items-center gap-2">
                            <div className="grid place-items-center w-6 h-6 opacity-70 cursor-grab">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <span className="text-white text-base">First name</span>
                        </div>
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${firstname ? "bg-[#1a8cff]" : "bg-zinc-800"
                                }`}
                        >
                            {firstname && <Check className="w-4 h-4 text-white" />}
                        </div>
                    </button>

                    <button
                        onClick={() => setLastname(!lastname)}
                        className="flex items-center justify-between w-full max-w-xs p-3 bg-zinc-800/40 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition-all duration-300"
                        aria-checked={lastname}
                        role="checkbox"
                    >
                        <div className="flex items-center gap-2">
                            <div className="grid place-items-center w-6 h-6 opacity-70 cursor-grab">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <span className="text-white text-base">Last name</span>
                        </div>
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${lastname ? "bg-[#1a8cff]" : "bg-zinc-800"
                                }`}
                        >
                            {lastname && <Check className="w-4 h-4 text-white" />}
                        </div>
                    </button>

                    <button
                        onClick={() => setPhonenumber(!phonenumber)}
                        className="flex items-center justify-between w-full max-w-xs p-3 bg-zinc-800/40 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition-all duration-300"
                        aria-checked={phonenumber}
                        role="checkbox"
                    >
                        <div className="flex items-center gap-2">
                            <div className="grid place-items-center w-6 h-6 opacity-70 cursor-grab">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <span className="text-white text-base ">Phone number</span>
                        </div>
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${phonenumber ? "bg-[#1a8cff]" : "bg-zinc-800"
                                }`}
                        >
                            {phonenumber && <Check className="w-4 h-4 text-white" />}
                        </div>
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setSocials(!socials)}
                        className="flex flex-col gap-4 w-full max-w-xs p-3 bg-zinc-800/40 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition-all duration-300"
                        aria-checked={socials}
                        role="checkbox"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="grid place-items-center w-6 h-6 opacity-70 cursor-grab">
                                    <GripVertical className="w-4 h-4" />
                                </div>
                                <span className="text-white text-base ">Socials</span>
                            </div>
                            <div
                                className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${socials ? "bg-[#1a8cff]" : "bg-zinc-800"
                                    }`}
                            >
                                {socials && <Check className="w-4 h-4 text-white" />}
                            </div>
                        </div>
                        <div className="grid grid-cols-5 justify-start gap-2 flex-wrap">
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                    setGoogle(!google)
                                }}
                                className={`w-11 bg-transparent cursor-pointer h-11  border rounded-md flex justify-center items-center  transition-all duration-300 ${google ? "bg-blue-500/20 border-blue-500 hover:bg-blue-500/20 hover:border-blue-500" : "bg-transparent   hover:bg-blue-500/10 hover:border-blue-500/40"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                    <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" />
                                    <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
                                    <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
                                    <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
                                </svg>
                            </Button>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                    setX(!x)
                                }} className={`w-11 bg-transparent cursor-pointer h-11  border rounded-md flex justify-center items-center  transition-all duration-300 ${x ? "bg-blue-500/20 border-blue-500 hover:bg-blue-500/20 hover:border-blue-500" : "bg-transparent   hover:bg-blue-500/10 hover:border-blue-500/40"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548" color="#fff" />
                                </svg>
                            </Button>
                            <Button

                                onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                    setDiscord(!discord)
                                }}
                                className={`w-11 bg-transparent cursor-pointer h-11  border rounded-md flex justify-center items-center  transition-all duration-300 ${discord ? "bg-blue-500/20 border-blue-500 hover:bg-blue-500/20 hover:border-blue-500" : "bg-transparent   hover:bg-blue-500/10 hover:border-blue-500/40"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                                    <g fill="none">
                                        <rect width="256" height="256" fill="#5865f2" rx="60" />
                                        <g clip-path="url(#skillIconsDiscord0)">
                                            <path fill="#fff" d="M197.308 64.797a165 165 0 0 0-40.709-12.627a.62.62 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.64.64 0 0 0-.655-.31a164.5 164.5 0 0 0-40.709 12.627a.6.6 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.7.7 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.65.65 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86 86 0 0 0 3.098-2.428a.62.62 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.62.62 0 0 1 .655.08a80 80 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.6 102.6 0 0 1-15.609 7.428a.64.64 0 0 0-.339.889a133 133 0 0 0 10.208 16.61a.64.64 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.65.65 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.5.5 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158" />
                                        </g>
                                        <defs>
                                            <clipPath id="skillIconsDiscord0">
                                                <path fill="#fff" d="M28 51h200v154.93H28z" />
                                            </clipPath>
                                        </defs>
                                    </g>
                                </svg>
                            </Button>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                    setGithub(!github)
                                }}
                                className={`w-11 bg-transparent cursor-pointer h-11  border rounded-md flex justify-center items-center  transition-all duration-300 ${github ? "bg-blue-500/20 border-blue-500 hover:bg-blue-500/20 hover:border-blue-500" : "bg-transparent   hover:bg-blue-500/10 hover:border-blue-500/40"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <g clip-path="url(#akarIconsGithubFill0)">
                                            <path fill="#fff" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd" />
                                        </g>
                                        <defs>
                                            <clipPath id="akarIconsGithubFill0">
                                                <path fill="#fff" d="M0 0h24v24H0z" />
                                            </clipPath>
                                        </defs>
                                    </g>
                                </svg>
                            </Button>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                    setApple(!apple)
                                }}
                                className={`w-11 bg-transparent cursor-pointer h-11  border rounded-md flex justify-center items-center  transition-all duration-300 ${apple ? "bg-blue-500/20 border-blue-500 hover:bg-blue-500/20 hover:border-blue-500" : "bg-transparent   hover:bg-blue-500/10 hover:border-blue-500/40"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#fff" d="M11.673 7.222c-.876 0-2.232-.996-3.66-.96c-1.884.024-3.612 1.092-4.584 2.784c-1.956 3.396-.504 8.412 1.404 11.172c.936 1.344 2.04 2.856 3.504 2.808c1.404-.06 1.932-.912 3.636-.912c1.692 0 2.172.912 3.66.876c1.512-.024 2.472-1.368 3.396-2.724c1.068-1.56 1.512-3.072 1.536-3.156c-.036-.012-2.94-1.128-2.976-4.488c-.024-2.808 2.292-4.152 2.4-4.212c-1.32-1.932-3.348-2.148-4.056-2.196c-1.848-.144-3.396 1.008-4.26 1.008m3.12-2.832c.78-.936 1.296-2.244 1.152-3.54c-1.116.048-2.46.744-3.264 1.68c-.72.828-1.344 2.16-1.176 3.432c1.236.096 2.508-.636 3.288-1.572" />
                                </svg>
                            </Button>

                            <Button
                                onClick={(e) => {
                                    e.preventDefault();    // Prevent anchor navigation
                                    e.stopPropagation();   // Stop event bubbling
                                    setFacebook(!facebook)
                                }}
                                className={`w-11 bg-transparent cursor-pointer h-11  border rounded-md flex justify-center items-center  transition-all duration-300 ${facebook ? "bg-blue-500/20 border-blue-500 hover:bg-blue-500/20 hover:border-blue-500" : "bg-transparent   hover:bg-blue-500/10 hover:border-blue-500/40"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                                    <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
                                    <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
                                </svg>
                            </Button>
                        </div>
                    </button>

                </div>
            </div>
        </>
    )
}
export default Auth
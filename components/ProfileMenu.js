import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"


import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"

import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";


const ProfileMenu = ({ image, userName }) => {
    const [position, setPosition] = useState("")
    const router = useRouter();

    if (position === 'Profile') {
        router.push('/profile');
    } else if (position === 'Logout') {
        signOut();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <Button className="w-8 h-8 rounded-full mr-6">
                    <Avatar>
                        <AvatarImage src={image} alt="user" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>


            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 mr-1">
                <DropdownMenuLabel>{userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="Profile"><FaUser className="mr-2" />  Profile</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Logout"><IoLogOut className="mr-2" />Logout</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileMenu




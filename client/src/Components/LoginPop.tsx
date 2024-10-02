import { Input } from "../Components/UI/input"
import { Label } from "../Components/UI/label"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "../Components/UI/drawer";
  import { Button } from "../Components/UI/button";
import { useState } from "react";
  

const LoginPop = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    // const [open, setOpen] = React.useState(false);

    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault()
      // Here you would typically handle the login logic
      console.log('Login attempted with:', { username, password })
      // Reset fields after attempt
      setUsername('')
      setPassword('')
    }

    return (
        <Drawer >
          <DrawerTrigger asChild>
            <Button variant="outline">Login</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Login</DrawerTitle>
              <DrawerDescription>
              <form onSubmit={handleLogin} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
}

export default LoginPop

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Auth from "./auth"


function Sidebar() {
    return (
        <>
            <div className="w-84 h-full bg-zinc-900/70 z-50 rounded-2xl flex flex-col gap-8 p-4 drop-shadow-2xl backdrop-blur-sm">
                <div className="flex flex-col gap-1">
                    <div className="text-3xl font-medium">FieldKit</div>
                    <div className="text-sm text-zinc-400">Lorem ipsum dolor</div>
                </div>
                <Tabs defaultValue="auth" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="auth" >Auth</TabsTrigger>
                        <TabsTrigger value="design">Design</TabsTrigger>
                    </TabsList>
                    <TabsContent value="auth">
                        <Auth />
                    </TabsContent>
                    <TabsContent value="design">

                    </TabsContent>
                </Tabs>

            </div>
        </>
    )
}
export default Sidebar
interface Script
{
    name: string;
    src: string;
}

export const ScriptStore: Script[] = [
    {
        name: "main", src: "../assets/js/main.js",
    }
];
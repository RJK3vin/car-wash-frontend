import { Helmet } from "react-helmet"

interface Props {
    title: string
    description: string
}

export default function Seo({title, description}: Props) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name = "description" content = {description} />
            <meta name = "viewport" content = "width=device-width, initial-scale=1" />
            <meta charSet = "utf-8" />
        </Helmet>
    )
}
import Image from "next/image"
import Container from "./Container"

export default function Header() {
  return (
      <div className="bg-gray-1000 p-4">
        <Container>
          <div className="flex items-center justify-between">
            <Image src="/logo.svg" alt="Logo Talk to Me!" width={120} height={120} />
            <Image src="/logo-hero-academy.svg" alt="Logo Hero Code" width={40} height={40}/>
          </div>
        </Container>
      </div>
  )
}

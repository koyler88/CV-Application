import { Button } from "./button"

export function Start({onClick}) {
    return (
        <nav className="side-nav">
            <Button
            className="category active"
            text="Contact"
            onClick={onClick}
            />
            <Button
            className="category"
            text="Education"
            onClick={onClick}
            />
            <Button
            className="category"
            text="Practical Experience"
            onClick={onClick}
            />
            <Button
            className="category"
            text="Preview"
            onClick={onClick}
            />
        </nav>
    )
}
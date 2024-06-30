const Content = () => {
    const handleNameChange = () => {
        const names = ['Karol', 'Petar', 'Michael'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }
    return (
        <main>
            <p>
                {/* We can use expression like arrow function to show some results */}
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content
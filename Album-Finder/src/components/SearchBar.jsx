import {
  FormControl,
  InputGroup,
  Container,
  Button,
  Card,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        let authParams = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
            "grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParams)
        .then((result) => result.json())
        .then((data) => {
        setAccessToken(data.access_token);
    });
  }, []);

    async function search() {

        if (!searchInput.trim()) {
            alert("Please enter an artist name to search for.");
            return;
        }

        let artistParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
        };

    // Get Artist
    const artistID = await fetch(
        "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", artistParams
    )
        .then((result) => result.json())
        .then((data) => {
        return data.artists.items[0].id;
    });


    // Get Artist Albums
    await fetch(
        "https://api.spotify.com/v1/artists/" + artistID + "/albums?include_groups=album&market=US&limit=50", artistParams
    )
        .then((result) => result.json())
        .then((data) => {
        setAlbums(data.items);
    });
    }

    return (
    <>
    
        <Container>
            <InputGroup>
                <FormControl
                    placeholder="Search for an Artist"
                    type="input"
                    aria-label="Search for an Artist"
                    onKeyDown={(event) => {if (event.key === "Enter") {search();}}}
                    onChange={(event) => setSearchInput(event.target.value)}
                    style={{
                        width: "300px", 
                        height: "50px", 
                        borderRadius: "20px", 
                        borderStyle: "solid", 
                        borderWidth: "0px", 
                        border: "2px solid black", 
                        marginTop: "10px", 
                        textAlign: "center",
                    }}
          />
            <Button 
                onClick={search} 
                style = {{
                    width: "100px", 
                    height: "50px", 
                    borderRadius: "20px", 
                    backgroundColor: "black", 
                    color: "white", 
                    border: "2px solid black", 
                    marginLeft: "10px", 
                    marginTop: "10px",
                }}>
                    Search
            </Button>
            </InputGroup>
        </Container>

        <Container>
            <Row
                style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignContent: "center",
                }}
        >
          {albums.map((album) => {
            return (
            <Card
                key={album.id}
                style={{
                    marginTop: "20px",
                    backgroundColor: "white",
                    margin: "15px",
                    borderRadius: "10px",
                    marginBottom: "30px",
                    padding: "20px 20px",
                }}
                >
                <Card.Img
                    width={200}
                    src={album.images[0].url}
                    style={{
                        borderRadius: "15px",
                    }}
                />
                <Card.Body>
                    <Card.Title
                        style={{
                            whiteSpace: "wrap",
                            fontWeight: "bold",
                            maxWidth: "200px",
                            fontSize: "18px",
                            marginTop: "10px",
                            color: "black",
                    }}
                    >
                    {album.name}
                    </Card.Title>

                    <Card.Text
                        style={{
                            color: "black",
                        }}
                    >
                    Release Date: <br /> {album.release_date}
                    </Card.Text>
                    
                    <Button
                        href={album.external_urls.spotify}
                        target="_blank"
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "15px",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            marginBottom: "12px",
                            display: "inline-block",
                    }}
                    >
                    Listen the Album now
                    </Button>
                </Card.Body>
            </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default SearchBar;
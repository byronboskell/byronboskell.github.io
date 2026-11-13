import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Blog0Content() {
    return (
        <Stack spacing={2}>
            <Typography>
                You can find a lot of content about software engineering online.
                But one big advantage of an actual book is that the author had to go to trouble of organising their thoughts, editing, getting test readers and getting the book published.
                Here are some books I have read and my thoughts about them.
            </Typography>
            <Stack spacing={2}>
                <Stack>
                    <Typography variant="h6">
                        Clean Code and Clean Coder by Robert C. Martin
                    </Typography>
                    <Typography>
                        Ebook Link: <Link to="https://play.google.com/store/books/details/Robert_C_Martin_Clean_Code?id=_i6bDeoCQzsC">Clean Code</Link>
                    </Typography>
                    <Typography>
                        Ebook Link: <Link to="https://play.google.com/store/books/details/Robert_C_Martin_The_Clean_Coder?id=ik0qCTVzl44C"> Clean Coder</Link>
                    </Typography>
                </Stack>
                <Typography>
                    I read these as they were recommended to me by my boss at IVAI.
                    They were the start of my interest in reading software engineering books.
                    Both are worth a reading just for the entertaining anecdotes about working with software.
                    Each chapter of the book carefully shows how important it is take on good habitats.
                    It was my first real introduction to test driven development.
                    I wouldn't have been able to adapt at my job if I hadn't started here.
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <Stack>
                    <Typography variant="h6">
                        The Software Architect Elevator by Gregor Hohpe
                    </Typography>
                    <Typography>
                        Ebook Link: <Link to="https://play.google.com/store/books/details/Gregor_Hohpe_The_Software_Architect_Elevator?id=Z0bcDwAAQBAJ">The Software Architect Elevator</Link>
                    </Typography>
                </Stack>
                <Typography>
                    Gregor Hohpe is a master of metaphor.
                    He has a way of putting things which makes it easy to understand.
                    The title of the book is a great example of this.
                    He talks about how a software architect needs to look at different levels of abstraction depending on what part of the organisation they are working with.
                    Full of great insights that encourage to consider your perspective when looking at different problems in software engineering.
                    I also recommend reading his <Link to="https://architectelevator.com/blog/">blog</Link> which is incredibly insightful.
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <Stack>
                    <Typography variant="h6">
                        The Pragmatic Programmer
                    </Typography>
                </Stack>
                <Typography>
                    I am not including a link to the ebook version of this book for a good reason.
                    I don't like this book.
                    It is similar to Clean Code, but with worse metaphors and it really down plays the importance of test driven development.
                </Typography>
            </Stack>
        </Stack>
    )
}
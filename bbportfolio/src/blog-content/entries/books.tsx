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
                        <Link to="https://play.google.com/store/books/details/Gregor_Hohpe_The_Software_Architect_Elevator?id=Z0bcDwAAQBAJ">Ebook Link</Link>
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
                        Modern Software Engineering by Dave Farley
                    </Typography>
                    <Typography>
                        <Link to="https://www.amazon.com.au/dp/0137314914/?bestFormat=true&k=modern%20software%20engineering&ref_=nb_sb_ss_w_scx-ent-bk-ww_k0_1_16_de&crid=2IYDI4UORVC0V&sprefix=modern%20software%20">Ebook Link</Link>
                    </Typography>
                </Stack>
                <Typography>
                    Dave Farley is a very knowledgeable about test driven development and software engineering.
                    Modern Software Engineering is a crystallisation of the wisdom on his <Link to="https://www.youtube.com/@ModernSoftwareEngineeringYT">youtube channel</Link>.
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <Stack>
                    <Typography variant="h6">
                        Extreme Programming Explained by Kent Beck
                    </Typography>
                    <Typography>
                        <Link to="https://play.google.com/store/books/details/Kent_Beck_Extreme_Programming_Explained?id=-DNcBAAAQBAJ">Ebook Link</Link>
                    </Typography>
                </Stack>
                <Typography>
                    Kent Beck's Extreme Programming Explained is a historic book as it was one of the first books to codify test driven development.
                    I read the revised edition, which has updated examples and corrections based on years of extra experience.
                    A must read book.
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <Stack>
                    <Typography variant="h6">
                        Domain-Driven Design by Eric Evans
                    </Typography>
                    <Typography>
                        <Link to="https://play.google.com/store/books/details/Eric_Evans_Domain_Driven_Design?id=hHBf4YxMnWMC">Ebook Link</Link>
                    </Typography>
                </Stack>
                <Typography>
                    This is an incredibly important book that has really shaped my thinking on software design.
                    It talks about the split between the problem that is being solved and the technology that we is used to solve it.
                    Everyone who makes software needs the information in this book.
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <Stack>
                    <Typography variant="h6">
                        The Pragmatic Programmer by David Thomas and Andrew Hunt
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
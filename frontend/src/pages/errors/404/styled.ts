import styled from 'styled-components'

export const Container = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Image = styled.img`
    margin-bottom: 3rem;
`
export const Info = styled.p`
    text-align: center;
    font-size: 1rem;
    color: ${({ theme: { colors } }) => colors.silvers[45]};
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin: 2rem auto;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
`
export const ButtonVoltar = styled.button`
    background-color: ${({ theme: { colors } }) => colors.primary.black};
    border: none;
    > svg {
        margin-right: 0.5rem;
    }
`
export const TagGroup = styled.div`
    display: flex;
    justify-content: center;
    > span a {
        color: ${({ theme: { colors } }) => colors.silvers[55]};
        transition: color 0.3s linear;
        :hover {
            color: ${({ theme: { colors } }) => colors.silvers[25]};
        }
    }
`

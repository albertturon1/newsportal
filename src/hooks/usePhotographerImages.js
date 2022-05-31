import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = "563492ad6f91700001000001dfa054904c8c47c380340c9b7f76549b";

const fetchImages = async (page) => {
    try {
        let res = await axios({
            url: `https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small`,
            headers: {
                Authorization: API_KEY,
            },
        });
        // Don't forget to return something
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export const usePhotographerImages = (id) => {
    return useQuery(['photographer', id],
    () => fetchImages(id), {
        select: (data) => data.photos.filter(photo => photo.photographer_id === parseInt(id))
    })
}



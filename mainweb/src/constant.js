const prod = {
    url: {
        API_URL: 'http://ec2-35-183-69-160.ca-central-1.compute.amazonaws.com:5080',
    }
};
const dev = {
    url: {
        API_URL: 'http://localhost:5080'
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
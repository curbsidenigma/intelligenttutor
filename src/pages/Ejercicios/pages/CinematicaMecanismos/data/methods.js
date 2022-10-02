const methods = {
    fullRangeAtan(x, y) {
        if (x > 0) {
            return Math.atan(y/x)
        }
        else if (x < 0 && y >= 0) {
            return Math.atan(y/x) + Math.PI
        }
        else {
            return Math.atan(y/x) - Math.PI
        }
    },
    rad2deg(rad) {
        return rad * 180 / Math.PI
    },
    deg2rad(deg) {
        return deg * Math.PI / 180
    },
    fetchData(variables, array) {
        return variables.map((variable, i) => {
            return {
                ...variable,
                magnitude: array[i]
            }
        })
    }
}

export default methods
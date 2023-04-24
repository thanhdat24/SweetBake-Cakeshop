import format from "date-fns/format";
import moment from 'moment';

export const formatDate = (date) => {
return format(new Date(date), 'dd-MM-yyyy HH:mm a');
}
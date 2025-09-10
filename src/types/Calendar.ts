export interface CalendarProps {
  title: string;
  event_status: string;
  description_short: string;
  start_datetime: string;
  end_datetime: string;
  updated_at: string;
  timezone: string;
  url: string
}

export interface CalendarInfoResponse {
  data: {
    id: number;
  };
}

export interface CalendarEventsResponse {
  data: {
    items: CalendarProps[];
  };
}
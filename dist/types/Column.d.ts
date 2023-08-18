/**
 * @author Abel David.
 */
export interface Column {
    name: string;
    required?: boolean;
    sortable?: boolean;
    filterable?: boolean;
    label: string;
    field?: string | ((row: any) => any);
}

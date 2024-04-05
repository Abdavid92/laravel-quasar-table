/**
 * @author Abel David.
 */
export interface Column<T> {
    /**
     * Name of column and field of the model.
     * This name will be used when field property is not provided.
     */
    name: string;
    /**
     * Indicate if is required.
     */
    required?: boolean;
    /**
     * Indicate if you can sort by this column.
     */
    sortable?: boolean;
    /**
     * Indicate if you can filter with this column.
     */
    filterable?: boolean;
    /**
     * Label shown in the table.
     */
    label: string;
    /**
     * Field's name (or callback) that should be used for fill cell value.
     */
    field?: string | ((row: T) => any);
}

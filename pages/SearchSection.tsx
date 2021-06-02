import styles from "../styles/Home.module.css";
import { Form, Field } from "react-final-form";

export const SearchSection = ({
  id,
  setId,
}: {
  id: number | undefined;
  setId: (id: number | undefined) => void;
}) => {
  const onEpisodeIdChange = (data: { episodeId: string }) => {
    setId(parseInt(data.episodeId));
  };

  const required = (value: string): string | undefined =>
    value ? undefined : "Required";
  const mustBeNumber = (value: string): string | undefined =>
    value ? (isNaN(parseInt(value)) ? "Not number" : undefined) : undefined;
  const composeValidators =
    (...validators: any[]) =>
    (value: string) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return (
    <div className={styles.searchSection}>
      <h5 className={styles.title}>Rick and Morty</h5>
      <Form
        onSubmit={onEpisodeIdChange}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="form"
            style={{ position: "absolute", bottom: "61%" }}
          >
            <Field
              name="episodeId"
              validate={composeValidators(required, mustBeNumber)}
            >
              {({ input, meta }) => (
                <div>
                  <label>Enter episode id</label>
                  <br />
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <input
                      {...input}
                      type="text"
                      placeholder="Episode Id"
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <button type="submit" disabled={meta.error}>Submit</button>
                    <div
                      style={{
                        position: "absolute",
                        left: "100%",
                        width: "100px",
                      }}
                    >
                      {meta.error && meta.touched ? (
                        <span
                          style={{
                            color: "red",
                            marginLeft: "15px",
                            height: "20px",
                          }}
                        >
                          {meta.error}
                        </span>
                      ) : (
                        <span style={{ height: "20px" }}> </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Field>
          </form>
        )}
      />
    </div>
  );
};

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
export const TermsAccordion = () => {
  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h2">წესები და პირობები</Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>როდის იწყება და რა ფორმატით გაიმართება აქცია</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>პირველი აკორდიონის შიდა ტექსტი</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>როგორ მივიღო აქციაში მონაწილეობა?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>მეორე აკორდიონის შიდა ტექსტი</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>სხვადასვა</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>მესამე აკორდიონის შიდა ტექსტი</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

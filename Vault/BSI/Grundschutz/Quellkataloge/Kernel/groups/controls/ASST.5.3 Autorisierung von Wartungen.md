---
tags:
- asst53-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ASST.5.3 Autorisierung von Wartungen
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: autorisieren
stmt_documentation: IT-Betriebskonzept
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ASST.5.3 - Autorisierung von Wartungen
Gruppe: [ASST.5 Wartung](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST.5%20Wartung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Informationen und Assets (ASST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST%20Informationen%20und%20Assets.md)*<br> *  &rarr; [Wartung](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST.5%20Wartung.md) *</div> | [Informationen und Assets](practices_Informationen_und_Assets_02088622-573d-4225-883c-9afe0c7dc69b) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | Wartungen | durch {{eine zuständige Person oder Rolle}} | [autorisieren](action_words_autorisieren_7e32a8ee-3b6b-45c2-a788-d4223d7920ad) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Informationen und Assets für IT-Systeme KANN Wartungen durch {{ insert: param, asst.5.3-prm1 }} autorisieren.</span>

> [!info]- Guidance
>Wartung ist die planbare oder anlassbezogene Änderung an Komponenten (z. B. Patches, Konfigurationsänderungen, Hardwaretausch, Firmware-Updates). Dies betrifft auch den Transfers des Systems oder von Komponenten für Reparatur oder Austausch an einem anderen Ort. Unklare oder fehlende Freigaben für Wartungen könnten zu unkoordinierten Änderungen, ungeplanten Ausfällen, Datenverlust oder der Einschleusung von Schadcode durch interne wie externe Dienstleister führen; außerdem könnten unpassende Zeitfenster oder inkompatible Firmwarestände Vertraulichkeit, Integrität und Verfügbarkeit beeinträchtigen. Zur Umsetzung kann die Institution ein schlankes Freigabeverfahren gestalten, z.B. (1) ein standardisiertes Wartungs-Ticket mit Pflichtangaben (Asset-ID, Maßnahme, Risiko-Einschätzung, Zeitfenster, Back-out-Plan, Ansprechpartner), das über CMDB-Bezüge (Konfigurationsdatenbank) automatisch an Asset-/Service-Owner geroutet und dort freigegeben werden kann; (2) technische Gates, sodass produktive Änderungen erst im Status „autorisiert“ durch CI/CD-Pipelines (Build-/Deployment-Kette), Change-Flags oder Just-in-Time-Privilegien mit zeitlich begrenzten Admin-Konten ausgeführt werden können; (3) ein Katalog vordefinierter, niedrig-riskanter Standardwartungen (z. B. Signatur-Updates, agentenlose Log-Rotation), die vorab genehmigt und ohne Einzelfallprüfung ausgelöst werden können.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 59a96eb8-75ad-420d-aab5-4d448f5c12ae |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 59a96eb8-75ad-420d-aab5-4d448f5c12ae |

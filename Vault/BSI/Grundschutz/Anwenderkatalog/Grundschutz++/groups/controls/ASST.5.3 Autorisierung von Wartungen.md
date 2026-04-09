---
tags: asst53-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ASST.5.3 Autorisierung von Wartungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ASST.5.3 - Autorisierung von Wartungen
Gruppe: [ASST.5 Wartung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.5%20Wartung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Informationen und Assets (ASST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST%20Informationen%20und%20Assets.md)**<br> ***  &rarr; [Wartung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.5%20Wartung.md) *** | IT-Systeme | KANN | Wartungen | durch {{eine zuständige Person oder Rolle}} | autorisieren | IT-Betriebskonzept | >Informationen und Assets für IT-Systeme KANN Wartungen durch {{ insert: param, asst.5.3-prm1 }} autorisieren.

> [!info]- Guidance
>Wartung ist die planbare oder anlassbezogene Änderung an Komponenten (z. B. Patches, Konfigurationsänderungen, Hardwaretausch, Firmware-Updates). Dies betrifft auch den Transfers des Systems oder von Komponenten für Reparatur oder Austausch an einem anderen Ort. Unklare oder fehlende Freigaben für Wartungen könnten zu unkoordinierten Änderungen, ungeplanten Ausfällen, Datenverlust oder der Einschleusung von Schadcode durch interne wie externe Dienstleister führen; außerdem könnten unpassende Zeitfenster oder inkompatible Firmwarestände Vertraulichkeit, Integrität und Verfügbarkeit beeinträchtigen. Zur Umsetzung kann die Institution ein schlankes Freigabeverfahren gestalten, z.B. (1) ein standardisiertes Wartungs-Ticket mit Pflichtangaben (Asset-ID, Maßnahme, Risiko-Einschätzung, Zeitfenster, Back-out-Plan, Ansprechpartner), das über CMDB-Bezüge (Konfigurationsdatenbank) automatisch an Asset-/Service-Owner geroutet und dort freigegeben werden kann; (2) technische Gates, sodass produktive Änderungen erst im Status „autorisiert“ durch CI/CD-Pipelines (Build-/Deployment-Kette), Change-Flags oder Just-in-Time-Privilegien mit zeitlich begrenzten Admin-Konten ausgeführt werden können; (3) ein Katalog vordefinierter, niedrig-riskanter Standardwartungen (z. B. Signatur-Updates, agentenlose Log-Rotation), die vorab genehmigt und ohne Einzelfallprüfung ausgelöst werden können.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 59a96eb8-75ad-420d-aab5-4d448f5c12ae |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 59a96eb8-75ad-420d-aab5-4d448f5c12ae |

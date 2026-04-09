---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.10 Cookie-Attribute
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.10 - Cookie-Attribute
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Webanwendungen | SOLLTE | Cookie-Attribute |  | aktivieren | Konfigurationshistorie | >Konfiguration für Webanwendungen SOLLTE Cookie-Attribute aktivieren.

> [!info]- Guidance
>"Secure" erzwingt die verschlüsselte HTTPS-Übertragung, wodurch Man-in-the-middle-Angriffe verhindert werden. "SameSite" sorgt dafür, dass Cookies nur zurückgesendet werden, wenn die Anfrage von der ursprünglichen Seite stammt. Hierdurch werden Cross-Site-Request-Forgery-Angriffe erschwert. "HttpOnly" verbietet es Client-seitigen Skripten auf das Cookie zuzugreifen, wodurch Cross-Site Scripting (XSS) erschwert wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4ac2fe69-5f2d-47d8-acf7-2be1485f9f37 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4ac2fe69-5f2d-47d8-acf7-2be1485f9f37 |

---
tags: Produktbeschreibung_Cryptography_Zero_Trust
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.14.1.2 Ende-zu-Ende-Verschlüsselung
parent_control: KONF.14.1 Verschlüsselung beim Transport
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.14.1.2 - Ende-zu-Ende-Verschlüsselung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Cryptography](tags_Cryptography)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [KONF.14 Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md)
---

** Übergeordnetes Control: ** [KONF.14.1 Verschlüsselung beim Transport](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.14.1%20Verschlüsselung%20beim%20Transport.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md) *** | Anwendungen | KANN | die Kommunikation Ende-zu-Ende | über Netze | verschlüsseln | Konfigurationshistorie | >Konfiguration für Anwendungen KANN die Kommunikation Ende-zu-Ende über Netze verschlüsseln.

> [!info]- Guidance
>Eine Ende-zu-Ende-Verschlüsselung stellt sicher, dass auch Server auf dem Weg zwischen den Endpunkten die Kommunikation nicht auslesen können. Die Unterstützung von Ende-zu-Ende-Verschlüsselung unterscheidet sich zwischen verschiedenen Kommunikationsanwendungen noch immer erheblich: Viele E-Mail-Server verschlüsseln gar nicht oder nur bei Verwendung spezieller Erweiterungen so, während viele Messenger-Apps die Ende-zu-Ende-Verschlüsselung ohne Nutzerinteraktion automatisch erzwingen. Dies kann je nach Anwendung z.B. mittels OpenPGP, S/MIME oder Signal Protocol geschehen. Für aktuelle Verschlüsselungsverfahren siehe BSI TR-02102. Für weitere Details zur Telekommunikation siehe "Kompendium für organisationsinterne Telekommunikationssysteme mit erhöhtem Schutzbedarf".

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3e17d0bd-cdec-4d89-b6a6-b2e018009e8f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 3e17d0bd-cdec-4d89-b6a6-b2e018009e8f |

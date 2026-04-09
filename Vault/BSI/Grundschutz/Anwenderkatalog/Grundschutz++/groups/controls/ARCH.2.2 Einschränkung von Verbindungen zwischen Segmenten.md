---
tags:
- Lateral_Movement_Separation_of_Concerns
- arch22-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2 - Einschränkung von Verbindungen zwischen Segmenten
Tags: "[Lateral Movement](tags_Lateral Movement)" "[Separation of Concerns](tags_Separation of Concerns)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md)
---

> [!info]- Untergeordnete Controls
> [ARCH.2.2.1 Externe Netzanschlüsse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.1%20Externe%20Netzanschlüsse.md)> [ARCH.2.2.2 Gastnetz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.2%20Gastnetz.md)> [ARCH.2.2.3 Segmentierung von Servern und Clients](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.3%20Segmentierung%20von%20Servern%20und%20Clients.md)> [ARCH.2.2.4 VoIP-Netz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.4%20VoIP-Netz.md)> [ARCH.2.2.5 OT-Systeme](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.5%20OT-Systeme.md)> [ARCH.2.2.6 Demilitarisierte Zone](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.6%20Demilitarisierte%20Zone.md)> [ARCH.2.2.7 Management-Netz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.7%20Management-Netz.md)> [ARCH.2.2.8 Segmentierung von Test und Betrieb](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.8%20Segmentierung%20von%20Test%20und%20Betrieb.md)> [ARCH.2.2.9 Segmentierung von IPv4 und IPv6](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.9%20Segmentierung%20von%20IPv4%20und%20IPv6.md)> [ARCH.2.2.10 Drucker-Netz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.10%20Drucker-Netz.md)> [ARCH.2.2.11 Physische Segmentierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.11%20Physische%20Segmentierung.md)> [ARCH.2.2.12 Sprungserver](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2.12%20Sprungserver.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md) *** | Netze | SOLLTE | Verbindungen zwischen Netzsegmenten | anhand von {{Kriterien}} | einschränken | Netzplan | >Architektur für Netze SOLLTE Verbindungen zwischen Netzsegmenten anhand von {{ insert: param, arch.2.2-prm1 }} einschränken.

> [!info]- Guidance
>Dient dem Ziel, die Angriffsfläche innerhalb interner und externer Netze zu reduzieren und die Ausbreitung potenzieller Schadsoftware oder unberechtigter Zugriffe einzudämmen. Ohne solche Begrenzungen könnte ein einzelner kompromittierter Bereich direkten Zugriff auf weitere sensible Segmente erhalten und dadurch Geschäftsprozesse massiv beeinträchtigen. Beispielsweise benötigt ein Endgerät Verbindungen zu internen Servern und Druckern, während Gäste lediglich auf den Internetanschluss Zugriff benötigen. Im Blick auf weitreichende Sicherheitsvorfälle ist hier insbesondere die Trennung interner Netzsegmente vom Internet zu beachten. Diese Regeln können auf Kriterien wie Gerätetyp (z. B. Laptop, IoT-Gerät), Benutzerrolle (z. B. Administrator, Gast), physischem Anschlussort oder Uhrzeit basieren. Eine klare Trennung von Benutzergruppen über VLANs oder dynamische ACLs erhöht die Sicherheit und Transparenz. Für die Einführung in eine bestehende Umgebung kann ein gestuftes Vorgehen gewählt werden: (1) Zunächst wird ein Überwachungsmodus ("Audit-Only") aktiviert, der protokolliert, welche Zugriffe durch eine strengere Richtlinie verweigert würden, ohne sie tatsächlich zu blockieren. (2) Anschließend werden diese Protokolle analysiert, um legitime, für den Geschäftsbetrieb notwendige Zugriffe zu identifizieren und diese gezielt in die jeweiligen Rollen und Berechtigungsgruppen aufzunehmen. (3) Erst wenn keine legitimen Zugriffe mehr in den Protokollen als "verweigert" auftauchen, wird die Richtlinie scharf geschaltet und blockiert aktiv alle nicht explizit erlaubten Zugriffe.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 6ff2de76-4a01-42cc-a794-1a6ec9313f46 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 6ff2de76-4a01-42cc-a794-1a6ec9313f46 |

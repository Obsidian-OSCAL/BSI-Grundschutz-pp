---
tags: Credential_Stuffing_Brute-Force-Attacke
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.10 Anmeldeversuchsgrenze an der Anwendung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.10 - Anmeldeversuchsgrenze an der Anwendung
Tags: "[Credential Stuffing](tags_Credential Stuffing)" "[Brute-Force-Attacke](tags_Brute-Force-Attacke)"
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md) *** | Anwendungen | SOLLTE | weitere Anmeldeversuche nach Erreichen von einem maximalen Schwellwert an fehlgeschlagenen Versuchen | vorübergehend | blockieren | Konfigurationshistorie | >Berechtigung für Anwendungen SOLLTE weitere Anmeldeversuche nach Erreichen von einem maximalen Schwellwert an fehlgeschlagenen Versuchen vorübergehend blockieren.

> [!info]- Guidance
>Häufen sich Anmeldeversuche, so könnte ein Angreifer Zugangsdaten durchprobieren. Durch eine Anmeldeversuchsgrenze wird der Zugriff durch das massenhafte Durchprobieren von Zugangsdaten (Credential Stuffing) verhindert. Dies kann z.B. durch die Begrenzung der Anmeldeversuche pro Client oder pro IP erfolgen. Dies betrifft sowohl die Anmeldung an der Benutzeroberfläche als auch über das Netz. Relevant sind hierbei sowohl primäre als auch ggf. vorhandene sekundäre Zugänge (z.B. Sicherheitsfragen, Passwort zurücksetzen). Für die Wahl des Schwellwertes ist die Anzahl der betroffenen Zugangskonten, die Passwortlänge und der Schutzbedarf der Anwendung von Bedeutung. Je nach Risikoprofil der Anwendung sind verschiedene Lösungen denkbar, z.B. die Verwendung von CAPTCHAS bei Erreichen der Anmeldeversuchsgrenze oder indem der Zeitraum einer Blockierung nach jedem fehlgeschlagenen Anmeldeversuch erhöht wird. Erfordert die Anwendung keine Zugangsdaten, so ist auch diese Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 265ee5bc-059a-4bde-b480-9bc1611171bf |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 265ee5bc-059a-4bde-b480-9bc1611171bf |

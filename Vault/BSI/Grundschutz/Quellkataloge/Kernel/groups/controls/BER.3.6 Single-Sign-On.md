---
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.6 Single-Sign-On
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.6 - Single-Sign-On
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md) *** | Anwendungen | SOLLTE | die Anmeldung über einen zentralen Identitätsprovider |  | aktivieren | Konfigurationshistorie | >Berechtigung für Anwendungen SOLLTE die Anmeldung über einen zentralen Identitätsprovider aktivieren.

> [!info]- Guidance
>Bei Single Sign-on authentifizieren sich Nutzende bei einem zentralen Identity Provider, der auch die Berechtigungen zur Nutzung der Anwendung prüft. Bei erfolgreicher Authentifizierung und passenden Berechtigungen wird für die Sitzung ein Token ausgestellt, das den Zugang zur Anwendung ermöglicht. Da Nutzende durch Single-Sign-On weniger Anmeldeinformationen benötigen, wird es leichter, sich komplexe Passwörter zu merken oder zentrale gepflegte Schutzmaßnahmen, wie eine Mehr-Faktor-Authentifizierung oder Überwachung von Anmeldeinformationen, auch auf die Anwendung anzuwenden. Zudem erschwert Single-Sign-On auch Phishing-Angriffe, da Anmeldeinformationen nur noch an zentraler Stelle und nicht mehr verstreut in einzelne Anwendungen oder Webseiten abgefragt werden. Andererseits ist bei der Kompromittierung des Single-Sign-On-Logins auch die Authentifizierung an der Anwendung kompromittiert und die Verfügbarkeit der Anwendung hängt auch von der Verfügbarkeit des zentralen Logins ab. Dies kann unter Windows durch Nutzung eines Windows Server Domain Controllers und unter Linux durch Samba mit aktiviertem Heimdal Kerberos Key Distribution Center (KDC) umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 494391e7-774c-4cc4-b9ed-dc8ab652e83b |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 494391e7-774c-4cc4-b9ed-dc8ab652e83b |
